/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";

import Dropdown from "../../components/Dropdown";
import {
  BlockActionGroup,
  BlockControls,
  BlockWrapper
} from "../../components/plugin";
import {
  DEFAULT_FEATURED_OPTIONS,
  DEFAULT_FEATURED_KEY
} from "../../components/plugin/defaults";


export default class CommonBlock extends Component {
  constructor(props) {
    super(props);

    this._handleFeaturedChange = ::this._handleFeaturedChange;
  }

  _handleFeaturedChange(newValue) {
    this.props.container.updateEntity({featured: newValue});
  }

  render(){
    const data = this.props.data;
    const options = this.props.blockProps.options;
    let defaultFeatured = DEFAULT_FEATURED_KEY;
    let featuredOptions = DEFAULT_FEATURED_OPTIONS;

    if (options) {
      if (options.defaultFeatured) {
        defaultFeatured = options.defaultFeatured;
      }
      if (options.featuredOptions) {
        featuredOptions = options.featuredOptions;
      }
    }

    return (
      <BlockWrapper>
        <BlockControls>
          <Dropdown
            items={featuredOptions}
            selected={data.featured || defaultFeatured}
            onChange={this._handleFeaturedChange} />

          <BlockActionGroup items={this.props.actions} />
        </BlockControls>

        {this.props.children}
      </BlockWrapper>
    );
  }
}
