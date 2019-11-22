import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles, fade } from '@material-ui/core/styles'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'rgba(255,255,255,0.7)',
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
  },
  activeButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    ['&:hover']: {
      background: fade(theme.palette.primary.main, 0.8),
    },
  },
}))

const Toolbar = props => {
  const { syncScroll, toggleSyncScroll, syncClick, toggleSyncClick } = props
  const classes = useStyles()

  return (
    <div>
      <Tooltip title="Sync Scrolling">
        <IconButton
          size="small"
          onClick={() => toggleSyncScroll()}
          color="secondary"
          classes={{
            root: classNames(
              classes.button,
              syncScroll ? classes.activeButton : null
            ),
          }}
        >
          <svg
            style={{ width: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-90 0 512 512"
          >
            <path
              d="M166.238281 430.144531L76.46875 335.246094l29.058594-27.488282 60.632812 64.097657 60.273438-64.058594 29.132812 27.410156zM332 392V120C332 53.832031 278.167969 0 212 0h-92C53.832031 0 0 53.832031 0 120v272c0 66.167969 53.832031 120 120 120h92c66.167969 0 120-53.832031 120-120zM212 40c44.113281 0 80 35.886719 80 80v272c0 44.113281-35.886719 80-80 80h-92c-44.113281 0-80-35.886719-80-80V120c0-44.113281 35.886719-80 80-80zm-46 41c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 0"
              fill="currentColor"
            />
          </svg>
        </IconButton>
      </Tooltip>
      <Tooltip title="Sync Clicks">
        <IconButton
          size="small"
          onClick={() => toggleSyncClick()}
          color="secondary"
          classes={{
            root: classNames(
              classes.button,
              syncClick ? classes.activeButton : null
            ),
          }}
        >
          <svg
            style={{ width: 15 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297 297"
          >
            <path
              d="M294.077 251.199l-59.104-59.106 42.166-24.357c3.295-1.904 5.213-5.521 4.938-9.316-.273-3.796-2.69-7.101-6.225-8.51L87.82 74.905c-3.687-1.472-7.895-.605-10.702 2.201-2.807 2.808-3.674 7.016-2.203 10.702l74.994 188.053c1.41 3.534 4.715 5.952 8.511 6.226 3.796.276 7.413-1.643 9.316-4.939l24.353-42.166 59.102 59.107c1.862 1.864 4.389 2.91 7.023 2.91 2.634 0 5.16-1.046 7.022-2.91l28.841-28.844c3.879-3.879 3.879-10.167 0-14.046zm-35.863 21.823l-61.229-61.235c-1.876-1.876-4.407-2.91-7.023-2.91-.43 0-.864.028-1.295.085-3.063.402-5.763 2.206-7.306 4.881l-20.584 35.642-58.849-147.564 147.549 58.857-35.645 20.588c-2.674 1.543-4.478 4.243-4.88 7.306-.403 3.06.64 6.134 2.824 8.318l61.232 61.235-14.794 14.797zM43.611 29.552c-3.88-3.876-10.166-3.876-14.048 0-3.879 3.88-3.879 10.168 0 14.048l22.069 22.069c1.939 1.938 4.482 2.909 7.024 2.909 2.541 0 5.082-.971 7.023-2.909 3.878-3.879 3.878-10.168 0-14.047l-22.068-22.07zM51.089 98.215c0-5.485-4.448-9.931-9.933-9.931H9.946c-5.484 0-9.933 4.445-9.933 9.931 0 5.484 4.448 9.932 9.933 9.932h31.21c5.485-.001 9.933-4.448 9.933-9.932zM47.063 128.87l-22.071 22.071c-3.88 3.877-3.88 10.166 0 14.045 1.939 1.939 4.479 2.909 7.023 2.909 2.541 0 5.082-.97 7.021-2.909l22.072-22.07c3.879-3.878 3.879-10.168 0-14.046-3.877-3.878-10.165-3.878-14.045 0zM98.222 51.078c5.484 0 9.932-4.448 9.932-9.933V9.932c0-5.484-4.447-9.932-9.932-9.932s-9.931 4.447-9.931 9.932v31.214c0 5.484 4.445 9.932 9.931 9.932zM135.893 64.005c2.544 0 5.085-.968 7.024-2.908l22.068-22.069c3.88-3.879 3.88-10.168 0-14.046-3.878-3.879-10.169-3.879-14.045 0l-22.069 22.069c-3.879 3.878-3.879 10.168 0 14.046 1.939 1.94 4.481 2.908 7.022 2.908z"
              fill="currentColor"
            />
          </svg>
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default Toolbar
