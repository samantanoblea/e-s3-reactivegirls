import React, { Component } from 'react';
import ButtonReset from './ButtonReset';
import PreviewCard from './PreviewCard';


class CardViewer extends Component {
    render() {
        return (
            <div className="container__card-editor">
                <ButtonReset 
                    reset={this.props.reset}
                />

                <PreviewCard
                    skills={this.props.skills}
                    name={this.props.name}
                    job={this.props.job}
                    email={this.props.email}
                    phone={this.props.phone}
                    linkedin={this.props.linkedin}
                    github={this.props.github}

                    img={this.props.img}
                    cardData = {this.props.cardData}
                    contactIcons ={this.props.contactIcons}
                    handleColourP ={this.props.handleColourP}

                    paletteValue={this.props.paletteValue}
                    typoValue={this.props.typoValue}
                    hiddenE={this.props.hiddenE}
                    hiddenP={this.props.hiddenP}
                    hiddenS={this.props.hiddenS}
                    hiddenL={this.props.hiddenL}
                    hiddenG={this.props.hiddenG}
                />
            </div>
        );
    }
}

export default CardViewer;
