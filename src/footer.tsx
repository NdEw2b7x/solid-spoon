import type { CardType } from '../types'

interface FooterProps {
  selectedCard: CardType
  onSelectCard: (card: CardType) => void
}

const tabs: { value: CardType; label: string }[] = [
  { value: 'credit', label: '신용' },
  { value: 'mile', label: '마일리지' },
  { value: 'prm', label: '프리미엄' },
  { value: 'plcc', label: '제휴' },
  { value: 'check', label: '체크' },
]

export default function Footer({ selectedCard, onSelectCard }: FooterProps) {
  return (
    <footer>
      <div>
        {tabs.map(({ value, label }, index) => (
          <label htmlFor={`tab-${index + 1}`} key={value}>
            <input
              type="radio"
              name="tab"
              id={`tab-${index + 1}`}
              value={value}
              checked={selectedCard === value}
              onChange={() => onSelectCard(value)}
            />
            {label}
          </label>
        ))}
      </div>
    </footer>
  )
}
