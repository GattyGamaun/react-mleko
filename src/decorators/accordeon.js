import React, { useState } from 'react';

export default (Component) => (props) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleOpenItem = (itemId) => () => {
    setOpenItemId(itemId === openItemId ? null : itemId);
  };

  return <Component {...props} toggleOpenItem={toggleOpenItem} openItemId={openItemId} />;
};
