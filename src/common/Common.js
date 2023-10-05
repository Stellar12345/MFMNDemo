import React, { Component } from 'react';


export class MyDiv extends Component {
  render() {
    let MyDiv = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <div className={className}>{this.props.children}</div>
  }
}
export class Section extends Component {
  render() {
    let Section = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <section className={className}>{this.props.children}</section>
  }
}

export class PTag extends Component {
  render() {
    let PTag = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <p className={className}>{this.props.children}</p>
  }
}
export class LabelTag extends Component {
  render() {
    let LabelTag = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <label className={className}>{this.props.children}</label>
  }
}
export class SpanTag extends Component {
  render() {
      let SpanTag = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <span className={className}>{this.props.children}</span>
  }
}
export class HeadingOne extends Component {
  render() {
      let HeadingOne = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <h1 className={className}>{this.props.children}</h1>
  }
}
export class HeadingTwo extends Component {
  render() {
      let HeadingTwo = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <h2 className={className}>{this.props.children}</h2>
  }
}
export class HeadingThree extends Component {
  render() {
      let HeadingThree = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <h3 className={className}>{this.props.children}</h3>
  }
}
export class HeadingFour extends Component {
  render() {
      let HeadingFour = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <h4 className={className}>{this.props.children}</h4>
  }
}
export class HeadingFive extends Component {
  render() {
      let HeadingFive = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <h5 className={className}>{this.props.children}</h5>
  }
}
export class HeadingSix extends Component {
  render() {
      let HeadingSix = null,
      className = ''

    if(this.props.className !== undefined){
        className = this.props.className
    }
    return <h6 className={className}>{this.props.children}</h6>
  }
}


export default {MyDiv, PTag, Section, SpanTag, LabelTag, HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix};

