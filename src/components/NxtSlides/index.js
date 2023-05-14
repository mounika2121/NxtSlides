import {Component} from 'react'
import './index.css'
import SlideListItem from '../SlideListItem'
import NxtSlideContext from '../../context'
import Slide from '../Slide'

class NxtSlides extends Component {
  render() {
    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default NxtSlides
