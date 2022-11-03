import useSiteToken from '../../../hooks/useSiteToken';
import React from 'react';
import { Button, Space, Typography, Tour, Tag, TimePicker, Alert, Modal, FloatButton } from 'antd';
import dayjs from 'dayjs';
import { CustomerServiceOutlined, QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const PLACEHOLDER_WIDTH = 400;

const SAMPLE_CONTENT =
  'WOW! This component preview is design out of screen. Seems you have a large screen or view the HTML element. Whish you like Ant Design and have a nice day!~';

const COMPONENTS: {
  title: React.ReactNode;
  type: 'new' | 'update';
  node: React.ReactNode;
}[] = [
  {
    title: 'Modal',
    type: 'update',
    node: (
      <Modal._InternalPanelDoNotUseOrYouWillBeFired title="Ant Design 5.0" width={300}>
        {SAMPLE_CONTENT}
      </Modal._InternalPanelDoNotUseOrYouWillBeFired>
    ),
  },
  {
    title: 'Tour',
    type: 'new',
    node: (
      <Tour._InternalPanelDoNotUseOrYouWillBeFired title="Ant Design 5.0" style={{ width: 400 }} />
    ),
  },
  {
    title: 'FloatButton',
    type: 'new',
    node: (
      <FloatButton._InternalPanelDoNotUseOrYouWillBeFired
        shape="square"
        items={[
          {
            icon: <QuestionCircleOutlined />,
          },
          {
            icon: <CustomerServiceOutlined />,
          },
          {
            icon: <SyncOutlined />,
          },
        ]}
      />
    ),
  },
  // {
  //   title: 'DatePicker',
  //   type: 'update',
  //   node: (
  //     <TimePicker._InternalPanelDoNotUseOrYouWillBeFired value={dayjs('2022-11-18 14:00:00')} />
  //   ),
  // },
  // {
  //   title: 'Steps',
  //   type: 'update',
  //   node: <Button style={{ width: PLACEHOLDER_WIDTH }}>Placeholder</Button>,
  // },
  // {
  //   title: 'Progress',
  //   type: 'update',
  //   node: <Button style={{ width: PLACEHOLDER_WIDTH }}>Placeholder</Button>,
  // },
  {
    title: 'Alert',
    type: 'update',
    node: (
      <Alert
        style={{ width: 400 }}
        message="Ant Design 5.0"
        description={SAMPLE_CONTENT}
        closable
      />
    ),
  },
];

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    card: css`
      border-radius: ${token.borderRadius}px;
      background: #f5f8ff;
      padding: ${token.paddingXL}px;
      flex: none;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;

      > * {
        flex: none;
      }
    `,
    cardCircle: css`
      position: absolute;
      width: 120px;
      height: 120px;
      background: #1677ff;
      border-radius: 50%;
      filter: blur(40px);
      opacity: 0.1;
    `,
  };
};

export default function ComponentsList() {
  const { token } = useSiteToken();
  const styles = useStyle();

  return (
    <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'stretch', columnGap: token.paddingLG }}>
        {COMPONENTS.map(({ title, node, type }, index) => {
          const tagColor = type === 'new' ? 'processing' : 'warning';
          const tagText = type === 'new' ? 'New' : 'Update';

          return (
            <div key={index} css={styles.card}>
              {/* Decorator */}
              <div
                css={styles.cardCircle}
                style={{
                  right: (index % 2) * -20 - 20,
                  bottom: (index % 3) * -40 - 20,
                }}
              />

              {/* Title */}
              <Space>
                <Typography.Title level={4} style={{ fontWeight: 'normal', margin: 0 }}>
                  {title}
                </Typography.Title>
                <Tag color={tagColor}>{tagText}</Tag>
              </Space>

              <div
                style={{
                  marginTop: token.paddingLG,
                  flex: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {node}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
