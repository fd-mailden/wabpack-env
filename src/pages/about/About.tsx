import React from 'react';
import Shopify from '@/assets/shopify.png'
import SvgImage from '@/assets/svg-img.svg'

const About = () => {

    return (
        <div data-testid = {'app.DataTestId'}>
            {__PLATFORM__}
            <img  data-testid = {'App.DataTestImageId'}src={Shopify} alt=""/>
            <SvgImage width="41" height="40" color = "red"/>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa debitis dolorum eaque in
                mollitia perspiciatis quis ratione sapiente, temporibus vel vero vitae voluptatum! Est excepturi minus
                natus obcaecati ut.
            </div>

        </div>
    );
};

export default About