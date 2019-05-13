import React, { PureComponent } from "react";
import Lightbox from "react-images";
const imageComingSoon = require(`../../images/quests/coming-soon.jpg`);

export default class Riddles extends PureComponent {
  constructor(props) {
    super(props);

    let { riddles } = props;

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      images: this.imageList(riddles)
    };
  }

  imageList = riddles => {
    return riddles.map((riddle, index) => {
      if (riddle) {
        return {
          src: require(`../../images/quests/${riddle.image}`),
          caption: riddle.riddle
        };
      } else {
        return {
          src: imageComingSoon,
          caption: `Riddle no.${index + 1} - Coming soon`
        };
      }
    });
  };

  gotoPrevious() {
    this.setState(state => ({
      currentImage: state.currentImage - 1
    }));
  }

  gotoNext() {
    this.setState(state => ({
      currentImage: state.currentImage + 1
    }));
  }

  openLightbox(index) {
    this.setState({ lightboxIsOpen: true, currentImage: index || 0 });
  }

  closeLightbox() {
    this.setState({ lightboxIsOpen: false });
  }

  renderRiddle = (riddle, index) => {
    return (
      <button
        className="quest__riddle"
        key={`riddle-${index}`}
        onClick={() => this.openLightbox(index)}
      >
        <div className="quest__riddle__image">
          {riddle && riddle.image && (
            <img
              src={require(`../../images/quests/${riddle.image}`)}
              alt={riddle.hint}
            />
          )}
        </div>
        <h3 className="quest__riddle__title">
          Riddle <span className="quest__riddle__title__no">no.</span>
          {index + 1}
        </h3>
        {riddle === null && (
          <p className="quest__riddle__unknown">Coming soon</p>
        )}
      </button>
    );
  };
  render() {
    let { lightboxIsOpen, currentImage, images } = this.state;
    let { riddles } = this.props;
    return (
      <div className="quest__riddles">
        {riddles.map((riddle, index) => this.renderRiddle(riddle, index))}
        <Lightbox
          images={images}
          isOpen={lightboxIsOpen}
          currentImage={currentImage}
          onClickPrev={() => this.gotoPrevious()}
          onClickNext={() => this.gotoNext()}
          onClose={() => this.closeLightbox()}
          backdropClosesModal={true}
          width={768}
          showImageCount={false}
        />
      </div>
    );
  }
}
