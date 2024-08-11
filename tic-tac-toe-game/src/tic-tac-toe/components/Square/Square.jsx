import { node, func } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
}

export default function Square({children, onPlay, ...restProps}) {
  const isDisabled = !!children;

  return (
    <button className={S.component} onClick={onPlay} disabled={isDisabled} {...restProps}>
      {children}
    </button>
  );
}
