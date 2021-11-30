import React from 'react';
import './Feature.scss';
import './../../../../normalize.css';

type FeatureProps = {
    name: String,
    description: String,
    icon: String
}

class Feature extends React.Component<FeatureProps> {
    render(): JSX.Element {

        let icon: JSX.Element;

        if (this.props.icon === "artist") {
            icon = (
                <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path d="M24.5293794,48 C25.1356501,48 25.6508325,47.7915131 26.0749267,47.3745392 C26.4990209,46.9575405 26.71211,46.4460051 26.714194,45.8399329 L26.7371925,28.5802735 L33.7207172,22.1039797 C35.0827607,22.2837993 36.4672569,22.0893173 37.8742057,21.5205339 C39.2811545,20.9517504 40.6164037,20.031267 41.8799534,18.7590836 L28.7294603,5.59389083 C27.4472786,6.85962375 26.5372648,8.18104167 25.9994189,9.5581446 C25.461573,10.9352723 25.287472,12.3109363 25.4771161,13.6851365 L3.68322864,37.1328686 C3.22536865,37.6272716 2.99803887,38.1763773 3.0012393,38.7801859 C3.00446454,39.3839954 3.29520749,39.9907387 3.87346816,40.6004156 L0.717099723,44.5810102 C0.558864501,44.7820171 0.487127727,45.0122248 0.501889401,45.2716333 C0.516651075,45.5310666 0.626247202,45.7690521 0.83067778,45.9855897 L1.52115198,46.6610293 C1.73012271,46.8677176 1.96180656,46.9803901 2.21620355,46.9990469 C2.47060053,47.0176788 2.71155075,46.9407817 2.93905419,46.7683554 L6.90632232,43.5821783 C7.49386176,44.1624981 8.0920817,44.4537497 8.70098215,44.4559329 C9.30990741,44.4581162 9.85646149,44.2313074 10.3406444,43.7755066 L22.3295675,32.6676322 L22.3295675,45.8399329 C22.3295675,46.4460051 22.5421728,46.9575405 22.9673834,47.3745392 C23.3926189,47.7915131 23.9132842,48 24.5293794,48 Z M6.11842107,38.988586 L26.7473892,17.1640041 C26.944625,17.523271 27.16997,17.8720807 27.4234242,18.2104331 C27.6768785,18.5487608 27.952376,18.8855378 28.2499167,19.2207643 C28.5573069,19.5480269 28.8752039,19.8458158 29.2036077,20.1141309 C29.5320115,20.3824212 29.8598448,20.6124428 30.1871073,20.8041957 L8.5033742,41.3882983 L6.11842107,38.988586 Z M31.0451203,3.27823074 L44.1954274,16.4465495 C45.6051053,15.0557021 46.5637458,13.5724888 47.0713489,11.9969096 C47.578952,10.4213304 47.6275787,8.8502417 47.2172289,7.28364353 C46.8071273,5.71707017 45.9211788,4.25671885 44.5593833,2.90258955 C43.2152027,1.56284978 41.7622322,0.687383272 40.2004719,0.276190019 C38.6389597,-0.135152092 37.0705008,-0.0870215917 35.4950952,0.42058152 C33.9194416,0.928209441 32.4361166,1.88075918 31.0451203,3.27823074 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
				</svg>
            )
        } else if (this.props.icon === "puzzle") {
            icon = (
                <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path d="M0,37.0802113 C0,38.9284783 0.508357069,40.3529199 1.52507121,41.3535361 C2.54178535,42.3541523 3.98942927,42.8544605 5.86800299,42.8544605 L30.2315564,42.8544605 C32.1101301,42.8544605 33.5572877,42.3541523 34.5730294,41.3535361 C35.588771,40.3529199 36.0966418,38.9284783 36.0966418,37.0802113 L36.0966418,30.1961242 C36.0966418,30.0178884 36.1559228,29.8957056 36.2744846,29.8295758 C36.3928395,29.7634253 36.5522668,29.7923933 36.7527667,29.9164797 C37.1367994,30.1857785 37.5431788,30.4289234 37.9719049,30.6459143 C38.4004242,30.8629051 38.8638084,31.038089 39.3620578,31.1714659 C39.8601002,31.3048635 40.3972493,31.3715622 40.9735053,31.3715622 C41.9110334,31.3715622 42.8005574,31.1982302 43.6420773,30.8515662 C44.4835972,30.5049022 45.2324196,30.0072013 45.8885444,29.3584633 C46.5444623,28.7097253 47.0604028,27.9375423 47.4363658,27.0419143 C47.8121219,26.1462657 48,25.1452874 48,24.0389794 C48,22.9326921 47.8121219,21.9296757 47.4363658,21.0299301 C47.0604028,20.1301846 46.5444623,19.3580016 45.8885444,18.7133812 C45.2324196,18.0687401 44.4835972,17.573129 43.6420773,17.2265477 C42.8005574,16.8799458 41.9110334,16.7066449 40.9735053,16.7066449 C40.3972493,16.7066449 39.8601002,16.7712538 39.3620578,16.9004717 C38.8638084,17.0296896 38.4004242,17.2048735 37.9719049,17.4260233 C37.5431788,17.6471939 37.1367994,17.8882592 36.7527667,18.1492194 C36.5522668,18.2816651 36.3928395,18.3147714 36.2744846,18.2485382 C36.1559228,18.1823257 36.0966418,18.0601015 36.0966418,17.8818656 L36.0966418,10.7742398 C36.0966418,8.92597904 35.588771,7.50154054 34.5730294,6.50092432 C33.5572877,5.50030811 32.1101301,5 30.2315564,5 L5.86800299,5 C3.98942927,5 2.54178535,5.50030811 1.52507121,6.50092432 C0.508357069,7.50154054 0,8.92597904 0,10.7742398 L0,19.4847158 C0,20.2996059 0.23785818,20.9414433 0.713574539,21.410228 C1.1892909,21.8789921 1.77492006,22.1133741 2.47046203,22.1133741 C2.86306097,22.1133741 3.24023446,22.0360606 3.6019825,21.8814337 C3.96373053,21.7268067 4.32409224,21.4955801 4.68306763,21.1877539 C5.1700815,20.7705115 5.67662808,20.4325689 6.20270734,20.1739262 C6.72878661,19.9152628 7.30241475,19.7859311 7.92359177,19.7859311 C9.06226112,19.7859311 10.0242465,20.1664152 10.8095478,20.9273835 C11.5948284,21.6883724 11.9874688,22.6966031 11.9874688,23.9520754 C11.9874688,25.2093066 11.5948284,26.2184063 10.8095478,26.9793745 C10.0242465,27.7403635 9.06226112,28.1208579 7.92359177,28.1208579 C7.30241475,28.1208579 6.72878661,27.9915262 6.20270734,27.7328628 C5.67662808,27.4741994 5.1700815,27.1362569 4.68306763,26.7190351 C4.32409224,26.4029944 3.96373053,26.1676606 3.6019825,26.0130337 C3.24023446,25.8584067 2.86306097,25.7810932 2.47046203,25.7810932 C1.77492006,25.7810932 1.1892909,26.0154752 0.713574539,26.4842393 C0.23785818,26.953024 0,27.5948614 0,28.4097515 L0,37.0802113 Z M3.21305628,36.9452402 L3.21305628,30.2676338 C3.21305628,29.8706069 3.3019673,29.6877672 3.47978934,29.7191147 C3.65763206,29.7504415 3.84663781,29.8281481 4.04680657,29.9522345 C4.42094877,30.1948621 4.81315457,30.4159498 5.22342398,30.6154979 C5.63371408,30.8150252 6.07455505,30.9768735 6.54594691,31.1010427 C7.01731807,31.2251912 7.52783739,31.2872654 8.07750487,31.2872654 C9.01505365,31.2872654 9.90619158,31.111885 10.7509187,30.7611241 C11.5956458,30.4103425 12.3443957,29.9126725 12.9971685,29.2681142 C13.6499206,28.6235766 14.1638437,27.8513936 14.5389377,26.9515653 C14.914011,26.0517369 15.1015477,25.051907 15.1015477,23.9520754 C15.1015477,22.8457882 14.914011,21.8427304 14.5389377,20.942902 C14.1638437,20.0430944 13.6499206,19.2709114 12.9971685,18.6263531 C12.3443957,17.9817948 11.5956458,17.4861836 10.7509187,17.1395196 C9.90619158,16.7928556 9.01505365,16.6195236 8.07750487,16.6195236 C7.52783739,16.6195236 7.01731807,16.6795494 6.54594691,16.799601 C6.07455505,16.9196526 5.63371408,17.0815009 5.22342398,17.2851458 C4.81315457,17.4887907 4.42094877,17.7078197 4.04680657,17.9422328 C3.84663781,18.0746786 3.65763206,18.1544853 3.47978934,18.1816532 C3.3019673,18.2088003 3.21305628,18.0238604 3.21305628,17.6268335 L3.21305628,10.9092203 C3.21305628,10.0532785 3.45419405,9.38949781 3.93646959,8.91787835 C4.41872444,8.44627959 5.08277407,8.2104802 5.92861849,8.2104802 L30.1831384,8.2104802 C31.0290035,8.2104802 31.6930946,8.44627959 32.1754115,8.91787835 C32.6577284,9.38949781 32.8988869,10.0532785 32.8988869,10.9092203 L32.8988869,19.4972859 C32.8988869,20.3102723 33.1363209,20.9656729 33.6111889,21.4634877 C34.0860569,21.9613232 34.6720378,22.210241 35.3691316,22.210241 C35.7517159,22.210241 36.1238511,22.1308273 36.485537,21.972 C36.847223,21.8131934 37.2085986,21.5808288 37.5696638,21.2749062 C38.0546706,20.8574982 38.5623345,20.5195039 39.0926555,20.2609233 C39.6227696,20.0023633 40.1992325,19.8730834 40.8220441,19.8730834 C41.9526231,19.8730834 42.9121876,20.2535675 43.7007375,21.0145357 C44.4892873,21.7755246 44.8835623,22.7836725 44.8835623,24.0389794 C44.8835623,25.2944725 44.4892873,26.3027135 43.7007375,27.0637024 C42.9121876,27.8246706 41.9526231,28.2051547 40.8220441,28.2051547 C40.1992325,28.2051547 39.6227696,28.076299 39.0926555,27.8185874 C38.5623345,27.5608758 38.0546706,27.2224573 37.5696638,26.803332 C37.2085986,26.4891949 36.847223,26.2547715 36.485537,26.1000618 C36.1238511,25.945352 35.7517159,25.8679972 35.3691316,25.8679972 C34.6720378,25.8679972 34.0860569,26.1168632 33.6111889,26.6145952 C33.1363209,27.1123479 32.8988869,27.7678003 32.8988869,28.5809523 L32.8988869,36.9452402 C32.8988869,37.801182 32.6577284,38.4649523 32.1754115,38.9365511 C31.6930946,39.4081705 31.0290035,39.6439803 30.1831384,39.6439803 L5.92861849,39.6439803 C5.08277407,39.6439803 4.41872444,39.4081705 3.93646959,38.9365511 C3.45419405,38.4649523 3.21305628,37.801182 3.21305628,36.9452402 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
				</svg>
            )
        } else if (this.props.icon === "shield") {
            icon = (
                <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4,28.2879228 C4,29.9763814 4.19815614,31.4835874 4.59446842,32.8095406 C4.99078071,34.1354914 5.62661353,35.3666939 6.5019669,36.5031481 C7.37732027,37.6396023 8.52107621,38.7624096 9.93323472,39.8715701 C11.3453932,40.9807406 13.0610712,42.1503506 15.0802687,43.3803999 C17.0994914,44.6104493 19.4592776,45.9820495 22.1596274,47.4952006 C22.4513698,47.6551161 22.7442207,47.7792219 23.03818,47.867518 C23.3321646,47.9558393 23.5881225,48 23.806054,48 C24.0263282,48 24.283445,47.9558393 24.5774043,47.867518 C24.8713637,47.7792219 25.1630684,47.6551161 25.4525184,47.4952006 C28.1651616,45.9920505 30.5335885,44.6279951 32.5577991,43.4030345 C34.58206,42.1780738 36.3001816,41.0110095 37.7121638,39.9018414 C39.1243979,38.7926784 40.2631785,37.6673243 41.1285056,36.5257792 C41.9938328,35.3842336 42.6247533,34.1479813 43.0212671,32.8170225 C43.417529,31.4860813 43.61566,29.9763814 43.61566,28.2879228 L43.61566,10.2883243 C43.61566,9.35772603 43.4982677,8.60451353 43.2634831,8.02868679 C43.0289505,7.45286006 42.661029,6.97766067 42.1597187,6.60308863 C41.6586602,6.2284914 41.0104836,5.87475271 40.2151887,5.54187256 C39.6299908,5.29892598 38.8650516,4.99904666 37.9203713,4.64223461 C36.975691,4.28542256 35.9467452,3.90650499 34.8335339,3.5054819 C33.7201715,3.104484 32.6079553,2.70405291 31.4968853,2.30418863 C30.3857901,1.90432435 29.3607112,1.53991707 28.4216486,1.21096679 C27.482586,0.882016515 26.7237936,0.616838454 26.1452714,0.415432612 C25.7678023,0.289147749 25.3798536,0.188344062 24.9814252,0.113021552 C24.583022,0.0376738507 24.1912316,0 23.806054,0 C23.4330186,0 23.0447928,0.0432915496 22.6413765,0.129874649 C22.2379602,0.216457748 21.8526063,0.311643736 21.4853146,0.415432612 C20.896615,0.592251575 20.1327339,0.845136195 19.1936713,1.17408647 C18.2545835,1.50301156 17.2289755,1.86740625 16.1168475,2.26727053 C15.0046943,2.66713481 13.8950098,3.07319619 12.7877941,3.48545468 C11.6805532,3.89771317 10.6521616,4.28532179 9.70261936,4.64828056 C8.7530771,5.01126453 7.9856818,5.30912852 7.40043345,5.54187256 C6.60493706,5.86245927 5.95665964,6.21311201 5.45560121,6.59383077 C4.95454277,6.97457472 4.58668426,7.45286006 4.35202567,8.02868679 C4.11734189,8.60451353 4,9.35772603 4,10.2883243 L4,28.2879228 Z M24.1537341,43.5853578 L24.1537341,3.95537645 C24.2752074,3.96537747 24.4104227,3.99214341 24.5593798,4.03567428 C24.708337,4.07920515 24.8825613,4.13451303 25.0820526,4.20159793 C25.6932481,4.44779421 26.4474683,4.73762213 27.3447131,5.07108168 C28.241983,5.40454124 29.2071944,5.76120214 30.2403471,6.14106439 C31.2734999,6.52095183 32.3140842,6.90246412 33.3620999,7.28560126 C34.4103172,7.6687384 35.400594,8.02612986 36.3329305,8.35777562 C37.2650151,8.6893962 38.0683712,8.9792745 38.7429989,9.22741053 C39.1332149,9.3728913 39.392939,9.56951076 39.5221713,9.81726891 C39.6514035,10.0650019 39.7160197,10.4455443 39.7160197,10.9588962 L39.7160197,27.5403784 C39.7160197,28.9532171 39.5568095,30.187889 39.2383893,31.2443943 C38.920221,32.3008996 38.4116051,33.2715334 37.7125417,34.1562958 C37.0134782,35.0410682 36.0968864,35.9177204 34.9627662,36.7862521 C33.8288979,37.6547834 32.4527254,38.594909 30.8342488,39.6066288 C29.2158476,40.6183436 27.3245851,41.7880468 25.160461,43.1157383 C24.9703914,43.2452729 24.792275,43.3503591 24.6261121,43.430997 C24.4599743,43.5116097 24.302515,43.5630633 24.1537341,43.5853578 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
				</svg>
            )
        } else {
            icon = (
                <div></div>
            )
        }

        return(
            <div className="feature-container">
                {icon}
                <strong><p>{this.props.name}</p></strong>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Feature;