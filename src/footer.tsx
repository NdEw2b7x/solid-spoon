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
      <nav>
        {tabs.map(({ value, label }) => (
          <button
            type="button"
            className={selectedCard === value ? 'active' : undefined}
            aria-pressed={selectedCard === value}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
              onSelectCard(value)
            }}
            key={value}
          >
            {label}
          </button>
        ))}
      </nav>
    </footer>
  )
}
