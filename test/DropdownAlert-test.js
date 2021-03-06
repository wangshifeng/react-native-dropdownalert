const React = require('react')
const should = require('should')
const { shallow } = require('enzyme')
const { expect } = require('chai')

import DropdownAlert from '../DropdownAlert'
import {
  View, Text, StyleSheet,
  TouchableHighlight, Animated, Modal,
  StatusBar, Image
} from "react-native"

describe('DropdownAlert', () => {
  it('should exist', () => {
    let wrapper = shallow(<DropdownAlert />)
    should.exist(wrapper)
  })
  it('should find custom type\'s components', () => {
    let wrapper = shallow(<DropdownAlert imageSrc={'https://facebook.github.io/react/img/logo_og.png'} showCancel={true}  />)
    wrapper.instance().alert('Title', 'Message')
    wrapper.update()
    expect(wrapper.find(StatusBar)).to.have.length(0)
    expect(wrapper.find(View)).to.have.length(2)
    expect(wrapper.find(Animated.View)).to.have.length(1)
    expect(wrapper.find(TouchableHighlight)).to.have.length(2)
    expect(wrapper.find(Text)).to.have.length(2)
    expect(wrapper.find(Image)).to.have.length(1)
  })
  it('should dismiss', () => {
    let wrapper = shallow(<DropdownAlert />)
    wrapper.instance().dismiss()
    wrapper.update()
    wrapper.instance().should.be.ok
  })
  it('should alert', () => {
    let wrapper = shallow(<DropdownAlert />)
    wrapper.instance().alert('Title', 'Message')
    wrapper.update()
    wrapper.instance().should.be.ok
  })
  it('should detect isOpen state change', () => {
    let wrapper = shallow(<DropdownAlert imageSrc={'https://facebook.github.io/react/img/logo_og.png'} />)
    wrapper.instance().alert('Title', 'Message')
    wrapper.update()
    wrapper.setState({ isOpen: false })
    expect(wrapper.find(Animated.View)).to.have.length(0)
    wrapper.setState({ isOpen: true })
    expect(wrapper.find(Animated.View)).to.have.length(1)
  })
})
