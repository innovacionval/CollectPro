import styles from './detailUnit.module.scss'
import { Sidebar } from '@/components/detailUnit/sidebar/sidebar'
import { DetailContent } from '@/components/detailUnit/detailContent/detailContent'
import { useState } from 'react'
import { Binnacle } from '@/components/detailUnit/binnacle/binnacle'
import { Simulator } from '@/components/detailUnit/simulator/simulator'
import { Collection } from '@/components/detailUnit/collection/collection'

export const DetailUnit = () => {
  const [sections, setSections] = useState({
    detail: true,
    binnacle: false,
    simulator: false,
    collection: false
  })
  
  
  return (
    <div className={styles.containerDetailUnit}>
      <Sidebar sections={sections} setSections={setSections}/>
      {sections.detail && <DetailContent/>}
      {sections.binnacle && <Binnacle/>}
      {sections.simulator && <Simulator/>}
      {sections.collection && <Collection/>}
    </div>
  )
}
