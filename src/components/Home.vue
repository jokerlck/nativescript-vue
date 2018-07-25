<template>
    <Page class="page">
        <ActionBar class="action-bar" flat="true" title="Home">
            <NavigationButton visibility="none"/>
        </ActionBar>

        <RadSideDrawer ref="drawer" showOverNavigation="true">
            <StackLayout ~drawerContent backgroundColor="gray">
                <side-menu></side-menu>
                <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
            </StackLayout>
            <StackLayout ~mainContent>
                <Button text="Open Drawer" @tap="onOpenDrawerTap" margin="10" class="btn btn-success center"/>
                <Label text="Labels" padding="10" backgroundColor="lightgray" />
            </StackLayout>
        </RadSideDrawer>
    </Page>
</template>


<script>
    import Counter from "./Counter"

    export default {
        data () {
            return {
            };
        },
        components: {
        },
        methods: {
            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            },
            toCounter() {
                this.$navigateTo(Counter)
            }
        },
    };

</script>

<style scoped>
</style>