import { Text } from '@chakra-ui/react';

const moment = require('moment');

export const MyDate = () => {
  const date = moment().format('YYYY年MM月DD日');
  return (
    <Text style={{ textIndent: 0 }} color="gray" fontSize="lg">
      {date}
    </Text>
  );
};
