

<script>
export default {
    props: ["items"],
    render: function(createElement) {
        console.log(this.items)
        if (this.items.length) {
            console.log(this.items.length)
            return createElement("li", this.items);
        } else {
            return createElement("p", "No items found.");
        }
    }
};
</script>
