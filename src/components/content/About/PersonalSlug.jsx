import TitleForm from '../../common/FormTitle'

import { infoList } from '../../../constants/infoList'
import InfoRow from './PersonalInfo'

export function AboutPersonal() {
  return (
    <div className="glass-effect rounded-2xl p-6" data-aos="fade-left">
      <TitleForm title="My Personal Info" />
      <div className="space-y-4">
        {infoList.map((item, i) => (
          <InfoRow key={i} {...item} />
        ))}
      </div>
    </div>
  )
}