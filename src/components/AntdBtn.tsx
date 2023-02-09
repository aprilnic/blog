import React from 'react';
import 'antd/dist/reset.css';

import { ConfigProvider,Button, Space ,DatePicker,Select} from 'antd';

const App: React.FC = () => (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <DatePicker />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
  </Space>
  </ConfigProvider>
);

export default App;