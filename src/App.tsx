import prds from '../lib/card.json'
import Footer from './footer'
import type { CardType } from '../types'

interface Card {
  id: number
  name: string
  img: string[]
  card: string
  fee: number
  release: string
  contents: string[]
  corp?: boolean
}

export default function App() {
  prds.forEach(({ img, contents, fee, release, name, id, corp, card }: Card) => {
    let imgnode = ''
    img.forEach(e => {
      imgnode += `<img src="${e}" loading="lazy" height="160">`
    })
    let contentsNode = ''
    contents.forEach(e => {
      contentsNode += `<span>${e}</span>`
    })
    const fee_ = Number(fee) > 99999 ? fee / 10000 + '만원' : fee == 0 ? '없음' : fee / 1000 + ',000원'
    const web = corp
      ? `https://m.wooricard.com/dcmw/yh2/bcd/bcd01/cdadv/M2BCD201S01.do?cdPrdCd=${id}`
      : `https://m.wooricard.com/dcmw/yh1/crd/crd01/M1CRD101S02.do?recomNo=${id}`
    // if (type == card) {
    if ('credit' == card) {
      if (!document.querySelector('main#content')) return new Error('main#content is null')
      document.querySelector('main#content')!.innerHTML += `<div data-container="card" data-card="${card}">
                <div class="card-title">${name}</div>
                <div class="card-img">${imgnode}</div>
                <div class="card-summary">
                  <span>연회비</span><span>${fee_}</span>
                  <span>출시일</span><span>${release}</span>
                </div>
                <div class="card-bottom">${contentsNode}</div>
                <div class="card-url">
                  <a href="${web}" target="_blank">홈페이지</a>
                  <a href="https://m.wooricard.com/dcmw/yh1/mlk/mlk05/M1MLK205S02.do?cdPrdCd=${id}" target="_blank">상품안내장</a>
                </div>
              </div>`
    }
  })

  return (
    <>
      <main id="content"></main>
      <Footer
        selectedCard={'credit'}
        onSelectCard={(card: CardType) => {
          throw new Error('Function not implemented.')
        }}
      />
    </>
  )
}
