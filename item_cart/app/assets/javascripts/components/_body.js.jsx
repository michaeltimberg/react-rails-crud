// Let’s test if everything is working.
// First, `<Body />`, the parent component of `<AllItems />` and `<NewItem />` must be put into the `<Main />` component.

var Body = React.createClass({
    render () {
        return (
            <div>
                <NewItem />

                <AllItems />
            </div>
        );
    }
});
