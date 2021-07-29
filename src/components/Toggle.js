import React, { useEffect } from 'react';

function Toggle({ setMessage }) {
  useEffect(() => {
    setMessage('マウントされたで');
    console.log('useEffectが実行されました');

    return () => {
      setMessage('アンマウントされたで');
      console.log('コンポーネントがアンマウントしました');
    };
  }, [setMessage]);

  return <h3>このコンポーネントにuseEffectがかかっています</h3>;
}

export default Toggle;
