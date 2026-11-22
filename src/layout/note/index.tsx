import React, { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ChevronDown,
  Circle,
  CircleCheck,
  FileText,
  RotateCcw,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { createNote, type ChurchNote } from './api';
import headerChapel from './img/header-chapel.jpg';
import crossSymbol from './img/cross-celtic.png';
import akafistKrest from './img/akafist-krest.jpg';
import akafistMlekopitatelnitsa from './img/akafist-mlekopitatelnitsa.jpg';
import './_style.scss';

const PLACEHOLDER = 'Выберите требу';
const TREBAS = [
  'Проскомидия',
  'Обедня',
  'Молебен',
  'Панихида',
  'Акафист',
  'Сорокоуст',
];
type NoteType = ChurchNote['type'];

const NOTE_PRICES: Record<string, number> = {
  Проскомидия: 3,
  Обедня: 8,
  Молебен: 5,
  Панихида: 5,
  Акафист: 8,
};
const AKAFIST_OPTIONS = [
  { value: 'Христу', label: 'Честному Кресту Господню', image: akafistKrest },
  {
    value: 'Млекопитательница',
    label: 'Божией Матери «Млекопитательница»',
    image: akafistMlekopitatelnitsa,
  },
];
const SUPPORT_EMAIL = 'Alexbelskid@gmail.com';
const INITIAL_NAMES_COUNT = 4;

const newIdempotencyKey = () => `note-${crypto.randomUUID()}`;

const LogoSeal = () => (
  <div className="note-seal">
    <span className="note-seal__diamond" />
    <span className="note-seal__diamond" />
    <img src={crossSymbol} alt="Крест" className="note-seal__cross" />
    <span className="note-seal__diamond" />
    <span className="note-seal__diamond" />
  </div>
);

const IntroText = () => (
  <section className="note-intro">
    <div className="note-intro__warning">
      <span className="note-intro__badge">!</span>
      <p>
        Обращаем ваше внимание, что за самоубийц не совершается церковное
        поминовение об упокоении, кроме как по благословению архиерея.
      </p>
    </div>
    <p>
      Мы принимаем записки о здравии и об упокоении, а также вы можете заказать
      сорокоуст, молебен, акафист, обедню и другие требы. Записки на пост
      принимаются только во время Рождественского и Великого поста.
    </p>
    <p>
      Подавая записку за христианина католического вероисповедания либо за
      некрещеного, обязательно указывайте это в записке рядом с именем.
    </p>
    <p>
      В случае возникновения вопросов обращайтесь в службу технической поддержки
      по электронной почте:
      <br />
      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
    </p>
  </section>
);

const INFO_ARTICLES = [
  {
    id: 'services',
    label: 'Услуги',
    title: 'Оказываемые услуги',
    Icon: FileText,
    text: 'На сайте можно подготовить церковную записку о здравии или об упокоении и выбрать требу: Проскомидию, Обедню, Молебен, Панихиду, Акафист или Сорокоуст. Итоговая сумма пожертвования показывается до подтверждения формы и зависит от выбранной требы и количества имён.',
  },
  {
    id: 'payment',
    label: 'Оплата',
    title: 'Оплата и безопасность',
    Icon: ShieldCheck,
    text: 'Онлайн-оплата пока не подключена. Сайт не запрашивает номер карты, срок её действия или CVC/CVV-код. После заключения договора с платёжным провайдером здесь будут опубликованы поддерживаемые способы оплаты, правила проведения платежа и официальные логотипы платёжных систем.',
  },
  {
    id: 'refund',
    label: 'Возврат',
    title: 'Отмена и возврат',
    Icon: RotateCcw,
    text: 'До подключения платежей возврат через сайт не производится, поскольку сайт не принимает деньги. Окончательный порядок отмены записки и возврата платежа будет опубликован после его утверждения организацией и согласования с платёжным провайдером.',
  },
];

type InfoArticleProps = {
  id: string;
  title: string;
  Icon: LucideIcon;
  children: ReactNode;
};

const InfoArticle = ({ id, title, Icon, children }: InfoArticleProps) => (
  <article id={id} className="note-info__article">
    <div className="note-info__heading">
      <Icon className="note-icon" />
      <h3>{title}</h3>
    </div>
    {children}
  </article>
);

const SiteInformation = () => (
  <section className="note-info" aria-labelledby="site-information-title">
    <h2 id="site-information-title" className="note-info__title">
      Информация об услугах и оплате
    </h2>
    <p className="note-info__lead">
      Сайт проходит подготовку к подключению онлайн-платежей. Сейчас банковские
      карты и платёжные данные на этой странице не принимаются.
    </p>

    <nav className="note-info__nav" aria-label="Разделы с информацией">
      {[...INFO_ARTICLES, { id: 'details', label: 'Реквизиты' }].map(
        ({ id, label }) => (
          <a key={id} href={`#${id}`} className="note-info__nav-link">
            {label}
          </a>
        )
      )}
    </nav>

    {INFO_ARTICLES.map(({ id, title, Icon, text }) => (
      <InfoArticle key={id} id={id} title={title} Icon={Icon}>
        <p>{text}</p>
      </InfoArticle>
    ))}
    <InfoArticle id="details" title="Контакты и реквизиты" Icon={Building2}>
      <dl className="note-info__details">
        <div>
          <dt>Техническая поддержка</dt>
          <dd>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </dd>
        </div>
        <div>
          <dt>Юридические реквизиты организации</dt>
          <dd className="note-muted">
            Будут опубликованы после получения и проверки официальных данных.
          </dd>
        </div>
      </dl>
    </InfoArticle>
  </section>
);

const CreatedNote = ({
  note,
  onReset,
}: {
  note: ChurchNote;
  onReset: () => void;
}) => (
  <section className="note note--created">
    <div className="note-created">
      <img src={crossSymbol} alt="Крест" className="note-created__cross" />
      <div className="note-created__check">
        <CircleCheck />
      </div>
      <h2 className="note-created__title">Записка подготовлена</h2>
      <p>
        Номер: <strong>{note.id}</strong>. Рекомендуемая сумма пожертвования:{' '}
        {note.amount} {note.currency}.
      </p>
      <div className="note-created__next">
        <strong>Следующий шаг:</strong> оплата пока не подключена, поэтому
        записка сохранена в тестовой очереди и не считается оплаченной. После
        подключения платёжной системы здесь появится безопасный переход к
        оплате.
      </div>
      <button
        type="button"
        onClick={onReset}
        className="note-button note-button--primary"
      >
        Создать ещё записку
      </button>
      <Link to="/admin" className="note-button note-button--outline">
        Открыть админку
      </Link>
    </div>
  </section>
);

function calculateAmount(treba: string, namesCount: number) {
  if (treba === 'Сорокоуст') return namesCount * 10;
  const price = NOTE_PRICES[treba] ?? 0;
  return price > 0 && namesCount > 0 ? Math.ceil(namesCount / 12) * price : 0;
}

function Note() {
  const [treba, setTreba] = useState(PLACEHOLDER);
  const [names, setNames] = useState<string[]>(() =>
    Array(INITIAL_NAMES_COUNT).fill('')
  );
  const [type, setType] = useState<NoteType>('zdravie');
  const [akafistTarget, setAkafistTarget] = useState(AKAFIST_OPTIONS[0].value);
  const [senderName, setSenderName] = useState('');
  const [idempotencyKey, setIdempotencyKey] = useState(newIdempotencyKey);
  const [created, setCreated] = useState<ChurchNote | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const filledNames = names.map((name) => name.trim()).filter(Boolean);
  const selected = treba !== PLACEHOLDER;
  const amount = calculateAmount(treba, filledNames.length);
  const canSubmit =
    selected && filledNames.length > 0 && senderName.trim() && !submitting;

  function reset() {
    setTreba(PLACEHOLDER);
    setNames(Array(INITIAL_NAMES_COUNT).fill(''));
    setType('zdravie');
    setAkafistTarget(AKAFIST_OPTIONS[0].value);
    setSenderName('');
    setCreated(null);
    setError('');
    setIdempotencyKey(newIdempotencyKey());
  }

  function changeTreba(value: string) {
    setTreba(value);
    if (value === 'Панихида') setType('upokoenie');
    if (value === 'Молебен' || value === 'Акафист') setType('zdravie');
  }

  function changeName(index: number, value: string) {
    setNames((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? value : item))
    );
  }

  async function submit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setError('');
    try {
      const result = await createNote(
        {
          treba,
          type,
          names: filledNames,
          senderName: senderName.trim(),
          duration: treba === 'Сорокоуст' ? '40 дней' : undefined,
          akafistTarget: treba === 'Акафист' ? akafistTarget : undefined,
        },
        idempotencyKey
      );
      setCreated(result.note);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Не удалось создать записку'
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (created) return <CreatedNote note={created} onReset={reset} />;

  return (
    <section className="note">
      <div className="note__container">
        <div className="note-form">
          <div className="note-form__hero">
            <img
              src={headerChapel}
              alt="Часовня внутри храма"
              className="note-form__hero-img"
            />
            <div className="note-form__hero-text">
              <h2>Подать записку</h2>
              <p>
                Выберите службу, укажите имена и проверьте сумму пожертвования
              </p>
            </div>
          </div>

          <LogoSeal />
          <div className="note-form__body">
            <div className="note-form__select">
              <label htmlFor="treba" className="visually-hidden">
                Выберите требу
              </label>
              <select
                id="treba"
                value={treba}
                onChange={(event) => changeTreba(event.target.value)}
              >
                <option disabled>{PLACEHOLDER}</option>
                {TREBAS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown className="note-form__select-arrow" />
            </div>

            {selected && (
              <div className="note-form__options">
                <div className="note-form__types">
                  {treba !== 'Панихида' && (
                    <button
                      type="button"
                      onClick={() => setType('zdravie')}
                      className={`note-type note-type--zdravie${type === 'zdravie' ? ' is-active' : ''}`}
                    >
                      {type === 'zdravie' ? <CircleCheck /> : <Circle />}о
                      здравии
                    </button>
                  )}
                  {!['Молебен', 'Акафист'].includes(treba) && (
                    <button
                      type="button"
                      onClick={() => setType('upokoenie')}
                      className={`note-type note-type--upokoenie${type === 'upokoenie' ? ' is-active' : ''}`}
                    >
                      {type === 'upokoenie' ? <CircleCheck /> : <Circle />}об
                      упокоении
                    </button>
                  )}
                </div>

                {treba === 'Сорокоуст' && (
                  <div className="note-form__duration">
                    <CircleCheck />
                    40 дней
                  </div>
                )}

                {treba === 'Акафист' && (
                  <div className="note-form__akafist">
                    {AKAFIST_OPTIONS.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => setAkafistTarget(option.value)}
                        className={`note-akafist${akafistTarget === option.value ? ' is-active' : ''}`}
                      >
                        <img src={option.image} alt={option.label} />
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="note-form__names">
              {names.map((name, index) => (
                <label key={index} className="note-form__name">
                  <span>{index + 1}.</span>
                  <span className="visually-hidden">
                    Имя {index + 1} в родительном падеже
                  </span>
                  <input
                    value={name}
                    onChange={(event) => changeName(index, event.target.value)}
                    placeholder="Имя в родительном падеже"
                  />
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setNames((current) => [...current, ''])}
              className="note-form__add"
            >
              Добавить ещё имя
            </button>
          </div>
        </div>

        <div className="note-submit">
          <label className="note-submit__sender">
            <span>Имя отправителя</span>
            <input
              value={senderName}
              onChange={(event) => setSenderName(event.target.value)}
              placeholder="Ваше имя"
            />
          </label>
          <div className="note-submit__amount">
            <div className="note-submit__amount-title">
              Рекомендуемая сумма пожертвования
            </div>
            <div className="note-submit__amount-values">
              <div>{amount}</div>
              <div>BYN</div>
            </div>
          </div>
          {error && (
            <p role="alert" className="note-alert">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            className="note-submit__button"
          >
            {submitting ? 'Создаём…' : 'Продолжить'}
          </button>
          <Link to="/admin" className="note-submit__admin">
            Вход для администратора
          </Link>
        </div>

        <div className="note-notice">
          <ShieldCheck className="note-icon" />
          <p>
            <strong>Оплата ещё не подключена.</strong> Сейчас можно проверить
            форму и подготовить записку. Банковские данные на этой странице не
            запрашиваются.
          </p>
        </div>

        <IntroText />
        <SiteInformation />
      </div>
    </section>
  );
}

export default Note;
