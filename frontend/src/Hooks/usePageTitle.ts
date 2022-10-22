import { useEffect } from 'react';

const usePageTitle = (PageTitle: string): void => {
  useEffect(() => {
    document.title = `Private Image Cloud - ${PageTitle}`;
  }, [PageTitle]);
};

export default usePageTitle;
