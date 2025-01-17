import React from 'react';
import './Explanation.scss';
import DesktopAppIcon from './images/AppIcon-Desktop.svg';
import MobileAppIcon from './images/AppIcon-Mobile.svg';
import AppStoreLight from './images/AppStore-Light.svg';
import AppStoreDark from './images/AppStore-Dark.svg';
import AppleMusic from './images/AppleMusic.svg';
import AmazonMusic from './images/AmazonMusic.svg';
import LightSpotify from './images/LightSpotify.svg';
import DarkSpotify from './images/DarkSpotify.svg';
import DarkPandora from './images/DarkPandora.png';
import LightPandora from './images/LightPandora.svg';
import DarkTidal from './images/DarkTidal.svg';
import LightTidal from './images/LightTidal.svg';
import DarkYouTube from './images/DarkYouTube.svg';
import LightYouTube from './images/LightYouTube.svg';
import DarkDeezer from './images/DarkDeezer.svg';
import LightDeezer from './images/LightDeezer.svg';

enum MusicIdentifier {
    AmazonMusic,
    AppleMusic,
    Spotify,
    Pandora,
    Tidal,
    YouTube,
    Deezer
}

class Explanation extends React.Component {

    render(): JSX.Element {

        const services = [
            MusicIdentifier.AmazonMusic,
            MusicIdentifier.AppleMusic,
            MusicIdentifier.Spotify,
            MusicIdentifier.Pandora,
            MusicIdentifier.Tidal,
            MusicIdentifier.YouTube,
            MusicIdentifier.Deezer
        ];

        const originService = services[Math.floor(Math.random() * services.length)];

        const filteredServices = services.filter(service => service !== originService);

        const targetService = filteredServices[Math.floor(Math.random() * filteredServices.length)];

        const elementForService = function (service: MusicIdentifier) {
            switch (service) {
                case MusicIdentifier.AppleMusic:
                    return(
                        <picture>
                            <img className="app-icon" src={AppleMusic} alt="Apple Music" />
                        </picture>
                    )
                case MusicIdentifier.Spotify:
                    return(
                        <picture>
                            <source srcSet={DarkSpotify} media="(prefers-color-scheme: dark)" />
                            <img className="app-icon" src={LightSpotify} alt="Spotify"/>
                        </picture>
                    )
                case MusicIdentifier.Pandora:
                    return(
                        <picture>
                            <source srcSet={DarkPandora} media="(prefers-color-scheme: dark)" />
                            <img className="app-icon" src={LightPandora} alt="Pandora" />
                        </picture>
                    )
                case MusicIdentifier.Tidal:
                    return(
                        <picture>
                            <source srcSet={DarkTidal} media="(prefers-color-scheme: dark)" />
                            <img className="app-icon" src={LightTidal} alt="Tidal" />
                        </picture>
                    )
                case MusicIdentifier.YouTube:
                    return(
                        <picture>
                            <source srcSet={DarkYouTube} media="(prefers-color-scheme: dark)" />
                            <img className="app-icon" src={LightYouTube} alt="YouTube Music" />
                        </picture>
                    )
                case MusicIdentifier.AmazonMusic:
                    return(
                        <picture>
                            <img className="app-icon" src={AmazonMusic} alt="Amazon Music" />
                        </picture>
                    )
                case MusicIdentifier.Deezer:
                    return(
                        <picture>
                            <source srcSet={DarkDeezer} media="(prefers-color-scheme: dark)" />
                            <img className="app-icon" src={LightDeezer} alt="Deezer" />
                        </picture>
                    )
            }
        }

        return(
            <div className="explanation-container">
                <div className="explanation-content">
                    <div className="artwork-container">
                        {elementForService(originService)}
                        <div className="arrow">
                            <svg role="presentation" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM1 9H23V7H1V9Z" fill="#000000"/>
                            </svg>
                        </div>
                        <picture>
                            <img className="app-icon desktop-only" src={DesktopAppIcon} alt="Convusic icon — a white soundwave"/>
                            <img className="app-icon mobile-only" src={MobileAppIcon} alt="Convusic icon — a white soundwave"/>
                        </picture>
                        <div className="arrow">
                            <svg role="presentation" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM1 9H23V7H1V9Z" fill="#000000"/>
                            </svg>
                        </div>
                        {elementForService(targetService)}
                    </div>
                    <div className="download-container">
                        <div className="download-content">
                            <a href="https://apps.apple.com/us/app/convusic/id1591366129">
                                <picture>
                                    <source srcSet={AppStoreDark} media="(prefers-color-scheme: dark)" />
                                    <img src={AppStoreLight} width="218" height="66" alt="Available on the Apple App Store"/>
                                </picture>
                            </a>
                            <p>Requires iOS 15 or macOS 12</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Explanation;