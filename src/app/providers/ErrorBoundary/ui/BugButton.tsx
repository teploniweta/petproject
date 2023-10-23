import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

// компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);
  const {t} = useTranslation()

  const throwError = () => setError(true);

  useEffect(() => {
    if(error)throw new Error();
  }, [error]);
  return (
    <Button onClick={throwError}>
      {t('throw error')}
    </Button>
  );
};
