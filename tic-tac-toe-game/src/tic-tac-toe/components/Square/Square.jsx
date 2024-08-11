import { node, func, object } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
  style: object
}

export default function Square({children, onPlay, style}) {
  const isDisabled = !!children;

  return (
    <button className={S.component} style={style} onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}
