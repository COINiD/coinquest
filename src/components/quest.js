import React, { PureComponent } from "react";
import Lightbox from "react-images";
import classnames from "classnames";
import Actions from "./quest/actions";
import Reward from "./quest/reward";
import Riddles from "./quest/riddles";

export default class Quest extends PureComponent {
  state = {
    lightboxIsOpen: false,
    currentImage: 0
  };

  openLightbox(index) {
    this.setState({ lightboxIsOpen: true, currentImage: index || 0 });
  }

  closeLightbox() {
    this.setState({ lightboxIsOpen: false });
  }

  render() {
    let { lightboxIsOpen } = this.state;
    let { completed, quest } = this.props;
    let { id, description, title, reward, ticker, riddles } = quest;

    let classes = classnames("quest", `quest--${id}`, {
      "quest--completed": completed
    });

    const lightboxImages = riddles.map(riddle => {
      return (
        riddle && {
          src: `../../images/quests/${riddle.image}`,
          caption: riddle.riddle
        }
      );
    });

    return (
      <div className={classes}>
        <h2 className="quest__title">{title}</h2>
        <Reward completed={completed} reward={reward} ticker={ticker} />
        <p className="quest__description">{description}</p>
        <Actions quest={quest} />
        <Riddles riddles={riddles} onClick={this.openLightbox.bind(this)} />
        <Lightbox
          images={lightboxImages}
          isOpen={lightboxIsOpen}
          onClose={this.closeLightbox.bind(this)}
          backdropClosesModal={true}
        />
      </div>
    );
  }
}
