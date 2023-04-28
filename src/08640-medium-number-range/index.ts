type Add<L,R extends unknown[] = []> = R['length'] extends L
  ? [...R,0]['length']
  : Add<L,[...R,0]>
type NumberRange<L, H, Result extends unknown[] = []> = L extends H
  ? [...Result, L][number]
  : NumberRange<Add<L>, H, [...Result, L]>;
