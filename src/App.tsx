import { useState } from 'react'
import prds from '../lib/card.json'
import Footer from './footer'
import type { CardType } from '../types'

interface Card {
  id: number
  name: string
  img: string[]
  card: CardType
  fee: number
  release: string
  contents: string[]
  corp?: boolean
}

export default function App() {
  const [type, setType] = useState<CardType>('credit')
  const cards = (prds as Card[]).filter(({ card }) => card === type)

  return (
    <>
      <main id="content" key={type}>
        {cards.map(({ card, id, name, img, contents, fee, release, corp }) => (
          <div key={id} data-container="card" data-card={card}>
            <div className="card-title">{name}</div>
            <div className="card-img">
              {img.map((src) => (
                <img src={src} alt={`${name} 카드`} loading="lazy" height="160" key={src} />
              ))}
            </div>
            <div className="card-summary">
              <span>연회비</span>
              <span>{fee > 99999 ? fee / 10000 + '만원' : fee === 0 ? '없음' : fee / 1000 + ',000원'}</span>
              <span>출시일</span>
              <span>{release}</span>
            </div>
            <div className="card-bottom">
              {contents.map((content, index) => (
                <span key={`${content}-${index}`}>{content}</span>
              ))}
            </div>
            <div className="card-url">
              <a
                href={
                  corp
                    ? `https://m.wooricard.com/dcmw/yh2/bcd/bcd01/cdadv/M2BCD201S01.do?cdPrdCd=${id}`
                    : `https://m.wooricard.com/dcmw/yh1/crd/crd01/M1CRD101S02.do?recomNo=${id}`
                }
                target="_blank"
                rel="noreferrer"
              >
                홈페이지
              </a>
              <a
                href={`https://m.wooricard.com/dcmw/yh1/mlk/mlk05/M1MLK205S02.do?cdPrdCd=${id}`}
                target="_blank"
                rel="noreferrer"
              >
                상품안내장
              </a>
            </div>
          </div>
        ))}
      </main>
      <Footer selectedCard={type} onSelectCard={setType} />
    </>
  )
}
