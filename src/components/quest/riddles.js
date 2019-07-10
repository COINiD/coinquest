import React, { PureComponent } from "react";
import Lightbox from "react-images";

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
    return riddles
      .map(riddle => {
        if (riddle) {
          return {
            src: require(`../../images/quests/${riddle.image}`),
            caption: riddle.riddle
          };
        } else {
          return null;
        }
      })
      .filter(Boolean);
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

  renderImage(riddle) {
    if (riddle && riddle.image) {
      return (
        <img
          src={require(`../../images/quests/${riddle.image}`)}
          alt={riddle.hint}
        />
      );
    } else {
      return (
        <span className="quest__riddle__empty">
          Coming
          <br />
          soon
        </span>
      );
    }
  }

  renderRiddle = (riddle, index) => {
    return (
      <button
        className={`quest__riddle ${riddle && "quest__riddle--active"}`}
        key={`riddle-${index}`}
        onClick={() => (riddle ? this.openLightbox(index) : null)}
        disabled={!riddle}
      >
        <div className="quest__riddle__image">{this.renderImage(riddle)}</div>
        <h3 className="quest__riddle__title">Riddle {index + 1}</h3>
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
