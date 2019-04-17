import React, { PureComponent } from "react";
import Lightbox from "react-images";
import classnames from "classnames";
import Actions from "./quest/actions";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";

export default class Quest extends PureComponent {
  constructor(props) {
    super(props);

    const {
      quest: { riddles }
    } = props;

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
          src: require(`../images/quests/${riddle.image}`),
          caption: riddle.riddle
        };
      } else {
        return {
          src: require(`../images/quests/coming-soon.jpg`),
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

  render() {
    let { lightboxIsOpen, currentImage, images } = this.state;
    let { completed, quest } = this.props;
    let { id, description, title, reward, ticker, riddles } = quest;

    let classes = classnames("quest", `quest--${id}`, {
      "quest--completed": completed
    });

    return (
      <div className={classes} id={`quest-${id}`}>
        <h2 className="quest__title">{title}</h2>
        <Reward completed={completed} reward={reward} ticker={ticker} />
        <p className="quest__description">{description}</p>
        <Actions quest={quest} />
        <Riddles riddles={riddles} onClick={this.openLightbox.bind(this)} />
        <Lightbox
          images={images}
          isOpen={lightboxIsOpen}
          currentImage={currentImage}
          onClickPrev={() => this.gotoPrevious()}
          onClickNext={() => this.gotoNext()}
          onClose={() => this.closeLightbox()}
          backdropClosesModal={true}
          showImageCount={false}
        />
      </div>
    );
  }
}
