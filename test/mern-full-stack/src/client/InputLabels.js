import React from 'react';

//define the input label component
class InputLabels extends React.Component {
    render() {
        return (
            <div className="field">
                <label className="label">{this.props.label}</label>
                <div className="control">
                    {/*set the input label fields to the attribute values*/}
                    <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} className="input" type="text" placeholder={this.props.placeholder} />
                </div>
            </div>

        );
    }
}

export default InputLabels;