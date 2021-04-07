import React, { useEffect } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const ExampleClient = (props) => {
  useEffect(() => {
    props.onPathChange("example-client");
  }, [props]);

  return (
    <div className="ExampleClient__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="ExampleClient__contentBlock">
        <div className="ExampleClient__content">
          <h1>Example Client</h1>
          <p>
            The DSNP is composed of three major elements. The first is identity,
            which creates a representation of users. The second is a social
            graph, which models relationships between user identities. The final
            element is messaging, which facilitates communication between users
            based on their social graph connections.
          </p>
          <p>
            Using the DSNP SDK, the Example Client demonstrates how to quickly
            integrate with the DSNP and manage all three elements. Given the
            development cycle, testing, and release sequence, the Example Client
            feature set might be behind the protocol spec and the SDK. Please
            read the release notes of the Example Client carefully to understand
            the dependencies.
          </p>
          <p>
            Grab the{" "}
            <a href="https://github.com/LibertyDSNP/sdk-ts" target="_blank">
              SDK
            </a>{" "}
            or the client from our repo and take a look. Hop in our{" "}
            <a href="https://forum.projectliberty.io" target="_blank">
              forums
            </a>{" "}
            to ask questions. As you read and learn, please help us improve
            these instructions for everybody else. We welcome your suggestions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExampleClient;
