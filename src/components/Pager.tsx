import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Pagination } from "@material-ui/lab"

const useStyles = makeStyles(() => ({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: `center`,
    margin: `40px 0`,
  },
}))

export const Pager = ({ pageContext }) => {
  const classes = useStyles()
  const { numberOfPages, humanPageNumber } = pageContext

  const handleChange = (event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/pages/${value}`)
  }
  return (
    <div className={classes.root}>
      <Pagination
        size="large"
        shape="rounded"
        defaultPage={humanPageNumber}
        count={numberOfPages}
        onChange={handleChange}
      />
    </div>
  )
}
