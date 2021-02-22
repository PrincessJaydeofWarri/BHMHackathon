import Ali from '../images/ALi.jpeg'
import Bob from '../images/BobMarley.jpg'
import Harriet from '../images/HarrietTubman.jpg'
import Science from '../images/Science.jpg'
import './Catagories.css'
import CatagoryItem from './CatagoryItem'

function Catagories() {
    return (
        <div className='catagories'>
        <h1>Choose one of our catagories</h1>
        <div className='catagory__container'>
        <div className='catagory__wrapper'>
          <ul className='catagory__items'>
        <CatagoryItem
              src={Ali}
              text='Sports Quiz'
              label='Sport'
              path='/sport'
            />
            <CatagoryItem
              src={Bob}
              text='Music Quiz'
              label='Music'
              path='/music'
            />
          </ul>
          <ul className='catagory__items'>
            <CatagoryItem
              src={Science}
              text='Science Quiz'
              label='Science'
              path='/science'
            />
            <CatagoryItem
              src={Harriet}
              text='History Quiz'
              label='History'
              path='/history'
            />
    </ul>
        </div>
      </div>
      </div>

    )
}

export default Catagories; 