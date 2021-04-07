import React, { useEffect } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Sdk = (props) => {
  useEffect(() => {
    props.onPathChange("sdk");
  }, [props]);

  return (
    <div className="SDK__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="SDK__contentBlock">
        <div className="SDK__content">
          <h1>SDK</h1>
          <p>
            If you’re new to DSNP development, this is the place to start. The
            Software Development Kit offers the core features, communication
            facilitations, build configurations, and common components for
            DSNP-enabled applications. This SDK allows developers to quickly get
            started with the DSNP.
          </p>
          <p>
            Download the SDK or clone it from our{" "}
            <a href="https://github.com/LibertyDSNP/sdk-ts" target="_blank">
              repository
            </a>{" "}
            and start with{" "}
            <a
              href="https://github.com/LibertyDSNP/sdk-ts/blob/main/docs/README.md"
              target="_blank"
            >
              the documentation
            </a>
            . Once you have the SDK, you might want to look at our{" "}
            <a
              href="https://github.com/LibertyDSNP/example-client"
              target="_blank"
            >
              Example Client
            </a>{" "}
            to start digging in to real, running code. As always, check out the{" "}
            <a href="https://projectliberty.io" target="_blank">
              forums
            </a>{" "}
            for help and to connect with other people building on top of the
            DSNP.
          </p>
          <p>
            The SDK is a work in progress. We could use your help with improving
            it, especially the documentation. Please submit documentation PRs as
            you learn more about how the SDK operates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sdk;
