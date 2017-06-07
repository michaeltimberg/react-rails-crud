// This component will be used to contain the information and methods for a single item.
// The `handleEdit()` and `handleDelete()` functions will be referenced as properties of the component and,
// as such, will be referenced using the `this.props.*` notation.

var Item = React.createClass({
    getInitialState() {
        return { editable: false }
    },

    handleEdit() {
        if (this.state.editable) {
            var name = this.refs.name.value;

            var id = this.props.item.id;

            var description = this.refs.description.value;

            var item = {
                id: id,
                name: name,
                description: description
            };

            this.props.handleUpdate(item);

            console.log(
                'in handleEdit',
                this.state.editable,
                this.refs.name.value,
                this.refs.description.value
            );
        }

        this.setState({ editable: !this.state.editable });

        console.log('edit button clicked')
    },

    render() {
        var name = this.state.editable ?
            <input
                type="text"

                ref="name"

                defaultValue={ this.props.item.name } /> :
            <h3>
                { this.props.item.name }
            </h3>;

        var description = this.state.editable ?
            <input
                type="text"

                ref="description"

                defaultValue={ this.props.item.description } /> :
            <p>
                { this.props.item.description }
            </p>;


        return (
            <div>
                { name }

                { description }

                <button
                    onClick={ this.props.handleDelete }>
                    Delete
                </button>

                <button
                    onClick={ this.handleEdit }>
                    { this.state.editable ?
                    'Submit' :
                    'Edit' }
                </button>
            </div>
        )
    }
});
