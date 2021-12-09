<Image
style={
{
//height: 350,
//width: 300,
//flex: 1,
//backgroundColor: "blue",
}
}
source={require("./src/assets/gif-cat.gif")}
/>

<Image
style={{
height: 300,
width: 300,
//backgroundColor: "blue",
}}
source={require("./src/assets/gif-chill.gif")}
/>




const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isEnabled ? <Navibar /> : <Navbar2 />}
      <Componente />
      <ScrollView contentContainerStyle={styles.centeredView}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ScrollView>
    </ScrollView>
  );