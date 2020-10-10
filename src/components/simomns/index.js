import React from "react"
import lottie from "lottie-web"
import love from "./lottie/love.json"

let animation

class Simomns extends React.Component {
  componentDidMount() {
    animation = lottie.loadAnimation({
      container: this.animBox,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: love,
    })
  }

  handleStop() {
    if (animation.isPaused) {
      animation.play()
    } else {
      animation.stop()
    }
  }

  render() {
    return (
      <div
        onClick={this.handleStop}
        ref={ref => (this.animBox = ref)}
        className="simomns"
      />
    )
  }
}

export default Simomns
