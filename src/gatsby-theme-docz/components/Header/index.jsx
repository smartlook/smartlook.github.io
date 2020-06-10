/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";

import * as styles from "./styles";
import { Logo } from "../Logo";

import { usePlatforms, useSetPlatform } from "context/PlatformsContext";

export const Header = (props) => {
  const { platforms, currentPlatform } = usePlatforms();
  const onSetPlatform = useSetPlatform();

  const handleChange = (event) => {
    const nextPlatform = event.target.value;
    onSetPlatform(nextPlatform);
  };

  return (
    <div sx={styles.wrapper} data-testid="header">
      <div sx={styles.innerContainer}>
        <Logo />
        <Flex>
          <Box sx={{ mr: 2 }}>
            <select value={currentPlatform} onChange={handleChange}>
              {platforms.map((o, i) => {
                return (
                  <option key={`platform-${i}`} value={o}>
                    {o}
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
