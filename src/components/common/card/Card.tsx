import { CardProps } from '../../../models/components/common'
import './Card.scss'

function Card({ children, className }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>
}

export default Card
