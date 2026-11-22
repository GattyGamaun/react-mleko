import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Clock3,
  FileText,
  LogOut,
  Printer,
  RefreshCw,
  Search,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import {
  changeNoteStatus,
  getPrintDocument,
  listNotes,
  validateAdminSession,
  type ChurchNote,
  type NoteStatus,
} from '../api';
import './_style.scss';

const TOKEN_KEY = 'hram-admin-token';

const statusLabels: Record<NoteStatus, string> = {
  pending_payment: 'Ожидает оплаты',
  paid: 'Оплачена',
  printing: 'Печатается',
  completed: 'Обработана',
  cancelled: 'Отменена',
  refunded: 'Возвращена',
};

const errorMessage = (error: unknown, fallback: string) =>
  error instanceof Error ? error.message : fallback;

const escapeHtml = (text: string) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function Login({ onLogin }: { onLogin: (token: string) => void }) {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChecking(true);
    setError('');
    try {
      await validateAdminSession(token);
      onLogin(token);
    } catch {
      setError('Неверный ключ доступа. Проверьте его и попробуйте ещё раз.');
    } finally {
      setChecking(false);
    }
  }

  return (
    <section className="admin admin--login">
      <form className="admin-login" onSubmit={login}>
        <ShieldCheck className="admin-login__icon" />
        <h2>Админ-панель</h2>
        <p>
          Введите локальный ключ доступа. В рабочей версии здесь будет отдельная
          защищённая учётная запись.
        </p>
        <label className="admin-login__field">
          <span>Ключ доступа</span>
          <input
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
          />
        </label>
        {error && (
          <p role="alert" className="admin-alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={!token || checking}
          className="admin-button admin-button--primary"
        >
          {checking ? 'Проверяем…' : 'Войти'}
        </button>
        <Link to="/note" className="admin-login__back">
          Вернуться к форме
        </Link>
      </form>
    </section>
  );
}

function AdminPanel({
  token,
  onLogout,
}: {
  token: string;
  onLogout: () => void;
}) {
  const [notes, setNotes] = useState<ChurchNote[]>([]);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<ChurchNote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refresh = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const result = await listNotes(token, filter || undefined);
      setNotes(result.notes);
      setSelected((current) =>
        current
          ? (result.notes.find((note) => note.id === current.id) ?? null)
          : null
      );
    } catch (loadError) {
      setError(errorMessage(loadError, 'Ошибка загрузки'));
    } finally {
      setLoading(false);
    }
  }, [token, filter]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const visible = useMemo(() => {
    const search = query.toLowerCase();
    return notes.filter((note) =>
      `${note.id} ${note.senderName} ${note.treba} ${note.names.join(' ')}`
        .toLowerCase()
        .includes(search)
    );
  }, [notes, query]);

  const stats = useMemo(
    () => [
      { label: 'Всего', value: notes.length, Icon: FileText },
      {
        label: 'Ожидают оплаты',
        value: notes.filter((note) => note.status === 'pending_payment').length,
        Icon: Clock3,
      },
      {
        label: 'Оплачены',
        value: notes.filter((note) => note.status === 'paid').length,
        Icon: WalletCards,
      },
    ],
    [notes]
  );

  async function complete(note: ChurchNote) {
    try {
      const result = await changeNoteStatus(token, note, 'completed');
      setSelected(result.note);
      await refresh();
    } catch (updateError) {
      setError(errorMessage(updateError, 'Ошибка статуса'));
    }
  }

  async function printNote(note: ChurchNote) {
    try {
      const result = await getPrintDocument(token, note);
      setSelected(result.note);
      setNotes((current) =>
        current.map((item) => (item.id === result.note.id ? result.note : item))
      );
      const windowRef = window.open('', '_blank', 'width=720,height=900');
      if (!windowRef) throw new Error('Браузер заблокировал окно печати');
      windowRef.document.write(
        `<html><head><title>${escapeHtml(note.id)}</title><style>body{font-family:Georgia,serif;padding:48px;white-space:pre-wrap;font-size:20px;line-height:1.6}</style></head><body>${escapeHtml(result.printDocument)}<script>window.print()</script></body></html>`
      );
      windowRef.document.close();
    } catch (printError) {
      setError(errorMessage(printError, 'Ошибка печати'));
    }
  }

  return (
    <section className="admin">
      <div className="admin-header">
        <div>
          <div className="admin-header__label">Hram Admin</div>
          <h2>Очередь церковных записок</h2>
        </div>
        <div className="admin-header__actions">
          <Link to="/note" className="admin-button admin-button--outline">
            Форма
          </Link>
          <button
            type="button"
            onClick={onLogout}
            className="admin-button admin-button--dark"
          >
            <LogOut className="admin-icon" />
            Выйти
          </button>
        </div>
      </div>

      <div className="admin-stats">
        {stats.map(({ label, value, Icon }) => (
          <div key={label} className="admin-card admin-stats__item">
            <Icon className="admin-stats__icon" />
            <div className="admin-stats__value">{value}</div>
            <div className="admin-muted">{label}</div>
          </div>
        ))}
      </div>

      <div className="admin-card admin-toolbar">
        <label className="admin-toolbar__search">
          <Search className="admin-toolbar__search-icon" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск по имени, требе или номеру"
          />
        </label>
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="">Все статусы</option>
          {Object.entries(statusLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={refresh}
          className="admin-button admin-button--outline"
        >
          <RefreshCw className="admin-icon" />
          Обновить
        </button>
      </div>

      {error && (
        <p role="alert" className="admin-alert">
          {error}
        </p>
      )}

      <div className="admin-layout">
        <div className="admin-card admin-list">
          <div className="admin-list__title">Записки</div>
          {loading ? (
            <p className="admin-list__empty">Загрузка…</p>
          ) : visible.length === 0 ? (
            <p className="admin-list__empty">Записок пока нет</p>
          ) : (
            visible.map((note) => (
              <button
                type="button"
                key={note.id}
                onClick={() => setSelected(note)}
                className={`admin-list__item${selected?.id === note.id ? ' is-active' : ''}`}
              >
                <div>
                  <div className="admin-list__name">
                    {note.treba} ·{' '}
                    {note.type === 'zdravie' ? 'о здравии' : 'об упокоении'}
                  </div>
                  <div className="admin-muted">
                    {note.names.length} имён · {note.amount} {note.currency}
                  </div>
                  <div className="admin-list__id">{note.id}</div>
                </div>
                <span className="admin-status">
                  {statusLabels[note.status]}
                </span>
              </button>
            ))
          )}
        </div>

        <aside className="admin-card admin-details">
          {!selected ? (
            <p className="admin-muted">Выберите записку слева</p>
          ) : (
            <>
              <div className="admin-details__header">
                <div>
                  <h3>{selected.treba}</h3>
                  <div className="admin-muted">{selected.id}</div>
                </div>
                <span className="admin-status admin-status--accent">
                  {statusLabels[selected.status]}
                </span>
              </div>
              <dl className="admin-details__list">
                <div>
                  <dt>Отправитель</dt>
                  <dd>{selected.senderName}</dd>
                </div>
                <div>
                  <dt>Сумма</dt>
                  <dd>
                    {selected.amount} {selected.currency}
                  </dd>
                </div>
                <div>
                  <dt>Имена</dt>
                  <dd className="admin-details__names">
                    {selected.names.map((name, index) => (
                      <div key={index}>
                        {index + 1}. {name}
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => printNote(selected)}
                className="admin-button admin-button--dark"
              >
                <Printer className="admin-icon" />
                Распечатать
              </button>
              {(selected.status === 'paid' ||
                selected.status === 'printing') && (
                <button
                  type="button"
                  onClick={() => complete(selected)}
                  className="admin-button admin-button--primary"
                >
                  {selected.status === 'paid'
                    ? 'Отметить обработанной'
                    : 'Завершить'}
                </button>
              )}
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

function Admin() {
  const [token, setToken] = useState(
    () => sessionStorage.getItem(TOKEN_KEY) ?? ''
  );

  function login(newToken: string) {
    sessionStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  }

  function logout() {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken('');
  }

  return token ? (
    <AdminPanel token={token} onLogout={logout} />
  ) : (
    <Login onLogin={login} />
  );
}

export default Admin;
