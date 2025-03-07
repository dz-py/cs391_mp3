import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function useDynamicTitle() {
  const currentPath = useParams();
  let lastValue = Object.values(currentPath).pop() || '';

  lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);

  useEffect(() => {
    if (lastValue === '') {
      document.title = 'Home | Resume';
    } else {
      document.title = `${lastValue} | Resume`;
    }
  }, [lastValue]);
}