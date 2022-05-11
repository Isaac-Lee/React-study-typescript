interface RandomNumberInterface {
  value: number
}

interface PositiveNumber extends RandomNumberInterface {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

interface NegativeNumber extends RandomNumberInterface {
  isPositive?: never
  isNegative: boolean
  isZero?: never
}

interface Zero extends RandomNumberInterface {
  isPositive?: never
  isNegative?: never
  isZero: boolean
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}
      {isZero && 'zero'}
    </div>
  )
}