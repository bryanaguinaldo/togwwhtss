import React from "react";
import Script from "next/script";

function GoogleAnalytics() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-J9R731N32B" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J9R731N32B');
        `}
            </Script>
        </>
    );
}

export default GoogleAnalytics;
