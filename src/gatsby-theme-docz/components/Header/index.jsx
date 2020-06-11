/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";

import * as styles from "./styles";
import { Logo } from "../Logo";

import { usePlatforms, useQueryString } from "hooks";

export const Header = (props) => {
  const { platforms, currentPlatform, handleSetPlatform } = usePlatforms();
  const [qs, handleSetQs] = useQueryString("platform");

  const handleChange = (event) => {
    const nextPlatform = event.target.value;
    handleSetPlatform(nextPlatform);
    handleSetQs(nextPlatform);
  };

  return (
    <div sx={styles.wrapper} data-testid="header">
      <div sx={styles.innerContainer}>
        <Logo />
        <Flex>
          <Box sx={{ mr: 2 }}>
            <select value={currentPlatform} onChange={handleChange}>
              {platforms.map((platform, index) => {
                return (
                  <option key={`platform-${index}`} value={platform}>
                    {platform}
                  </option>
                );
              })}
            </select>
          </Box>
        </Flex>
      </div>
    </div>
  );
};
