import React, { memo } from 'react'
import ThemeContext from './context/theme'

const HomeBanner = memo(() => {
  return (
    <div>
        <ThemeContext.Consumer>
            {
                value => (<h3>Banner { value.color }</h3>)
                
            }
        </ThemeContext.Consumer>
    </div>
  )
})

export default HomeBanner