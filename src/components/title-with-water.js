import React from 'react';

import Water from './water';
import Title from './title';
import MailingListForm from './mailing-list-form';
import Clouds from './clouds';

const TitleWithWater = (props) => (
   <div className='wrap'>
      <div className='titleWithWater'>
         <Title />
         <MailingListForm />
         <Water far part={props.sceneIndex !== 0 ? 'left' : 'none'} />
         <Water background part={props.sceneIndex !== 0 ? 'right' : 'none'}/>
         <Water part={props.sceneIndex !== 0 ? 'left' : 'none'}/>
         <Clouds />
      </div>
   </div>
);

export default TitleWithWater;
