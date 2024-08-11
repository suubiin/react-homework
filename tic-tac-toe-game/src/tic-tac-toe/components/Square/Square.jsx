import { node, func } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onplay: func
}

export default function Square({children, onPlay}) {
  const isDisabled = !!children;

  return (
    <button className={S.component} onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}
