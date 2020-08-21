import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }
  
  render() {
    return(
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a 
          target='_blank' 
          href={this.props.image.links.html}
          rel="noopener noreferrer"
        >
            <img 
              ref={this.imageRef}
              src={this.props.image.urls.small}
              alt={this.props.image.description}
            />
        </a>
      </div>
    )
  }

}

export default ImageCard;
