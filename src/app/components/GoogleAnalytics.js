import React from "react";
import Script from "next/script";

function GoogleAnalytics() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-24EC63YC0N" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-24EC63YC0N');
        `}
            </Script>
        </>
    );
}

export default GoogleAnalytics;
