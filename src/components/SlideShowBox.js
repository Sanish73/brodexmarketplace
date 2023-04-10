import { View } from 'native-base';
import React, {Component} from 'react';
import Slideshow from 'react-native-slideshow';

export default class SlideshowTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'http://placeimg.com/640/480/any'
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'http://placeimg.com/640/480/any'
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'http://placeimg.com/640/480/any'
                }
            ]
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length
                        ? 0
                        : this.state.position + 1
                });
            }, 7000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View
            bgColor={'red.100'}
            m={2}
                style={{
                borderRadius: 8,
                overflow: 'hidden'
            }}>
                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}
                    height={123}
                    width={200}/>
            </View>
        );
    }
}
