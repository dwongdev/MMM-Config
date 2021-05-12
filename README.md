# MMM-Config

enable form based configuration for MagicMirror


## Dependencies

* An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)


## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
2. cd MMM-Config
3. npm install
4. Configure your `~/MagicMirror/config/config.js`: (via editor for the last time)

    ```
		{
			module:"MMM-Config",
			position:"top_right",  // the QR code (if requested) will appear here
			config:{

			}
		}
    ```

## Config Options

all options are case sensitive

| **Option** | **Default** | **Default** | **Info**
| --- | --- | --- | --- |
| `showQR` | OPTIONAL | `false` | show a QR code on the MM screen to allow quick access to the configuration form |
| | | |otherwise use a browser to open http://machine_name:MM_Port/modules/MMM-Config/review |
| | | | `Note:` if MagicMirror is configured for `'address:"localhost"`, you `MUST use a browser ON the same system as MM`, and the QR code will be replaced by text on the screen explaining why the QRCode is not displayed
| `force_update` | OPTIONAL | false | each time MM is started a scan is done of changed items, config.js and the modules folder. if either changed since last startup, then a new form is generated. if no changes, then the existing form is reused. set to true `forces` a new form to be built on every MM startup |
| `restart` | OPTIONAL | static or pm2:pm2name | if set on save of config.js, MM will be restarted to use that new config file |
| `debug` | OPTIONAL | false | turns on debugging of the form submisson and rewrite of config.js |

on form submission, a new config.js is constructed and saved, `AFTER` renaming the current config.js out of the way.  

The rename adds on the date and time the existing config.js was last modified

the new config.js filename will look  like this `config.js.2021-05-04T10.01.27`.

the ':'  in the time is changed to '.' as windows will not allow a filename with ':'.

the form looks like this

Main form page
the form colors can be set in webform.css
![main page](./doc_images/MMM-Config%20form.png)

the base expanded

![base variables](./doc_images/MMM-Config%20base.png)

modules expanded
Module names in red are disabled or not in config.js, in blue are in config.js and enabled


![base variables](./doc_images/MMM-Config%20modules.png)
